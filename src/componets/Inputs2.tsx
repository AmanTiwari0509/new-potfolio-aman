

const Inputs2 = ({ name, value, onChange, label, placeholder }: any) => {
    return (
        <div className='w-full md:px-8 px-4'>
            <label>{label}</label>
            
            <textarea id="freeform" name={name} typeof='text' rows={4} cols={50} value={value} onChange={onChange} className={`w-full h-40 rounded-md p-6 text-white bg-transparent shadow-2xl border border-gray-50`} placeholder={placeholder} >
            </textarea>
        </div>

    )
}

export default Inputs2