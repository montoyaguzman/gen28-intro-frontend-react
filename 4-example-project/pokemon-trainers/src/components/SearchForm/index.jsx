import './styles.css';

import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';

function SearchForm() {

    const handleForm = (event) => {
        event.preventDefault();
        // const name = document.querySelector('#trainer-name');
        // console.log('name', name.value);

        const formElement = event.target;
        const formData = new FormData(formElement);

        const trainerName = formData.get('trainer-name');
        const isChampion = formData.get('isChampion');

        const params = {
            name: trainerName,
            isChampion: isChampion
        };

        console.log(params);

    }

    return (
        <>
            <div className='container-form'>
                <form id='search-form' className='form-element' onSubmit={handleForm}>

                    <h2>Nombre del entrenador: </h2>
                    <input type="text" id="trainer-name" name="trainer-name" placeholder='Nombre entrenador...' />
                    {/* <SearchIcon /> */}
                    <div className='radio-container'>
                        <TuneIcon />
                        ¿Sólo campeones?:
                        <label htmlFor="true">Si</label>
                        <input type="radio" name="isChampion" id="true" />

                        <label htmlFor="false">No</label>
                        <input type="radio" name="isChampion" id="false" />
                    </div>

                    <input type="submit" className="button-default" value="Buscar" />

                    {/* <Autocomplete
                        id="free-solo-demo"
                        freeSolo
                        renderInput={(params) => <TextField {...params} label="freeSolo" />}
                    /> */}

                </form>
            </div>
        </>
    );

}

export { SearchForm };