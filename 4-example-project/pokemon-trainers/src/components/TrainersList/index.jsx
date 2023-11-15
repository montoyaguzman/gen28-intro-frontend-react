import './styles.css';

function TrainersList({ children }) {

    return (
        <>
            <div className='container-list'>
                {children}
            </div>
        </>
    );

}

export { TrainersList };