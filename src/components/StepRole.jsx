import { useState, useEffect, useRef, useContext } from "react";
import { allRoles } from "../utils/rolesList";
import { LanguageContext } from "../i18n/LanguageContext";

function StepRole({ role, setRole, onNext }) {
  const { dictionary: t } = useContext(LanguageContext);

  const [inputValue, setInputValue] = useState(role || "");
  const [filteredRoles, setFilteredRoles] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const matches =
      inputValue.length > 1
        ? allRoles.filter((r) =>
            r.toLowerCase().includes(inputValue.toLowerCase())
          )
        : [];
    setFilteredRoles(matches);
  }, [inputValue]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (selectedRole) => {
    setInputValue(selectedRole);
    setRole(selectedRole);
    setShowSuggestions(false);
  };

  return (
    <>
      <label className="block text-sm font-medium mb-2">
        {t.roleLabel}
      </label>

      <div className="relative" ref={containerRef}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setRole(e.target.value);
            setShowSuggestions(true);
          }}
          placeholder={t.rolePlaceholder}
          className="w-full border rounded-lg p-2 mb-1 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          onFocus={() => setShowSuggestions(true)}
        />

        {showSuggestions && filteredRoles.length > 0 && (
          <ul className="suggestions absolute z-10 w-full max-h-48 overflow-y-auto rounded-lg shadow-lg bg-white dark:bg-gray-800 text-black">
            {filteredRoles.map((roleOption) => (
              <li
                key={roleOption}
                onClick={() => handleSelect(roleOption)}
                className="px-4 py-2 hover:bg-blue-100 cursor-pointer text-sm"
              >
                {roleOption}
              </li>
            ))}
          </ul>
        )}
      </div>

      {inputValue && !allRoles.includes(inputValue) && (
        <p className="text-sm text-yellow-600 dark:text-yellow-400 italic mt-1">
          ⚠️ {t.roleNotFound}
        </p>
      )}

      <button
        onClick={() => inputValue.trim() && onNext()}
        className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
      >
        {t.next}
      </button>
    </>
  );
}

export default StepRole;
