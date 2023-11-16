import './styles.css';

function TrainersList({ children }) {

    return (
        <>
            <div className='container-list container-80'>
                {children}
            </div>
        </>
    );

}

export { TrainersList };