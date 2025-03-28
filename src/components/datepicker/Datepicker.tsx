type DatepickerProps = {
  label: string
}

export const Datepicker = ({ label }: DatepickerProps) => {
  return (
    <div className="ui">
      <div className="ui-flex ui-flex-col ui-gap-2">
        <label htmlFor={label}>{label}</label>
        <input
          type="date"
          name={label}
          className="ui-border ui-border-slate-200 ui-rounded ui-py-2 ui-px-3"
        />
      </div>
    </div>
  )
}
