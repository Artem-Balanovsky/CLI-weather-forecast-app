import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + msg);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Without parameters - show weather forecast
        -s [CITY] to setup the city
        -h to show the Help window
        -t [API_KEY] to save the token
        `
    );
};

const printWeather = (res, icon) => {
        console.log(
        dedent`
        
        
        ${chalk.bgYellow(' WEATHER ')} Погода на острове ${res.name}
        ${icon}  ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed} м/с
        Атмосферное давление: ${res.main.pressure} бар
        
        
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };