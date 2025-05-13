import { useController } from "react-hook-form";

const SelectInput = ({ name, title, required, control,option=[] }) => {
  const {
    field,
    fieldState: { error }
  } = useController({
    name,
    control,
    rules: required ? { required: "Field must be filled" } : {},
  });

  return (
    <div className="mb-4">
      <div className="relative pt-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 absolute top-0 left-3 bg-white">
        {title}
      </label>
      <select
        id={name}
        type="text"
        {...field}
        className="border p-2 mt-1 w-full"
      >
        {
              option.map((curr,ind)=><option key={ind}>{curr}</option>)
        }
      </select>
      </div>
      {error?.message && (
        <p role="alert" className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};


export default SelectInput;
