import { linkedSignal } from "@angular/core";
import { delay, Observable, of } from "rxjs";

const users = [
    { userName: 'admin', password: 'admin', rol: 'admin' },
    { userName: 'user', password: 'user', rol: 'agent' }
]
export async function loginMock(userName: string, password: string): Promise<Observable<any>> {
    const filtredUsers = of(users.filter(user => (user.userName == userName && user.password == password))).pipe(delay(2000));
    return filtredUsers;
}
