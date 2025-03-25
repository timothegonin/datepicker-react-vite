type DatepickerProps = {
  label: string
}

export const Datepicker = ({
  label,
}: DatepickerProps) => {

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} className="border border-slate-200 rounded py-2 px-3"/>
    </div>
  )
}