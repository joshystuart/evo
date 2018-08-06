// @flow
export default class DriverDto {
    id: string;
    sessionId: string;
    username: string;
    nickname: string;
    avatar: string;
    iRating: number;
    license: number;
    teamName: string;
    carNumber: string;

    get avatar(): string {
        // return this.avatar;
        return `http://members.iracing.com/membersite/member/GetProfileImage?custid=${this.id}`
    }
}
