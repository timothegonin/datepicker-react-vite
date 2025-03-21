type DatepickerProps = {
  label: string
}

export const Datepicker = ({
  label,
}: DatepickerProps) => {

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input type="date" />
    </div>
  )
}