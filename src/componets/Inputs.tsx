

const Inputs = ({ name, value, onChange, label, placeholder }: any) => {
    return (
        <div className='w-full md:px-8 px-4 '>
            <label>{label}</label>
            <input type="text"  name={name} value={value} onChange={onChange} className={`w-full h-10 rounded-md p-6 bg-transparent shadow-2xl border border-gray-50 text-white`} placeholder={placeholder} />
        </div>

    )
}

export default Inputs