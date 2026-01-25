function FormField({ label, children }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <label className="text-sm font-medium text-gray-700">{label}:</label>
      {children}
    </div>
  );
}

export default FormField;
