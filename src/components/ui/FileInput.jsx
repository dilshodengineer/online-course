
const FileInput = ({
    id = "",
    name = "",
    label,
    className = "",
    accept = "image/*",
    onChange
}) => {
    return (
        <div className={className}>
            {label && (
                <label htmlFor={id} className="mb-1">
                    {label}
                </label>
            )}

            <input
                type="file"
                id={id}
                name={name}
                accept={accept}
                onChange={onChange}
                className="form-control"
            />
        </div>
    );
};

export default FileInput;