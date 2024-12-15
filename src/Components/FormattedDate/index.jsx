const FormattedDate = ({ isHighLight, children }) => {
    return (
        <div>
            <span className={`text-sm ${isHighLight ? "text-blue-500" : "text-gray-500"}`}>
                {children}
            </span>
        </div>
    )
}

export default FormattedDate;