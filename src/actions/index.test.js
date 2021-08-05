import moxios from 'moxios';
import { getPermission } from './';

describe('get permission', () =>{
    beforeEach(() =>{
        moxios.install();
    });
    afterEach(() =>{
        moxios.uninstall();
    })
    test('tests if permission gets value admin', () =>{
        moxios.wait(() =>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status:200,
                response: "admin"
            })
        });
        return getPermission()
        .then((permission) =>{
            expect(permission).toBe("admin");
        });
    });
});