import { useEffect } from "react";

export function Efectos() {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        // Éste código lo quiero correr al montar el componente
        console.log("solo me ejecuto al montar");
        fetch("https://swapi.dev/api/films")
            .then((data) => data.json())
            .then((data) => console.log(data));

        // Éste código lo quiero correr al desmontar el componente
        return () => {
            console.log("solo me ejecuto al desmontar");
        };
    }, []);


    return (
        <div>
            <ol>
                {peliculas.map((pelicula) => (
                    <li>{pelicula.title}</li>
                ))}
            </ol>

        </div>;
}


