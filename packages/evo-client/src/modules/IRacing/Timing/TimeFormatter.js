import TimeDto from 'src/modules/IRacing/Timing/TimeDto';

export default class TimeFormatter {
    format(time: number): TimeDto {
        const timeDto = new TimeDto();

        const tempSeconds = parseInt(time, 10);
        console.log(tempSeconds);
        timeDto.milliseconds = parseInt((time - tempSeconds) * 1000);

        timeDto.hours = Math.floor(tempSeconds / (60 * 60));

        const minutesDivisor = tempSeconds % (60 * 60);
        timeDto.minutes = Math.floor(minutesDivisor / 60);

        const secondsDivisor = minutesDivisor % 60;
        timeDto.seconds = Math.ceil(secondsDivisor);

        return timeDto;
    }
}
