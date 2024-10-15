'use client';
import './Belepes.scss';

export default function Belepes() {
    return (
        <div id='Belepes'>
            <div className='wrapper'>
                <h2>Belépés</h2>
                <label htmlFor="nev">Név</label>
                <input type="text" name="nev" id="nev" />
                <label htmlFor="eamil">Email cím</label>
                <input type="eamil" name="eamil" id="eamil" />
                <button type='submit'>Belépés</button>
            </div>
        </div>
    );
}