

const project = [
    {
        name: "Project-done",
        value: "21"
    },

     {
        name: "Awards Won",
        value: "2"
    }, {
        name: "Happy Clients",
        value: "21"
    },
]

const ProjectCount = () => {
    return (
        <div className='w-full md:h-[350px] h-[200px] screen2 grid grid-cols-3 justify-center items-center'>
            {project.map((item: any) => {
                return (
                    <div className=''>
                        <div className='text-white flex flex-col gap-4 justify-center items-center'>
                            <h1 className='text-5xl'>{item.value}</h1>
                            <p className='text-2xl'>{item.name}</p>
                        </div>

                    </div>

                )
            })}
        </div>
    )
}

export default ProjectCount