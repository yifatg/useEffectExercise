# FPGA Farm Cloud

## Road Map
Roadmap xls can be found here:
\\\\flexjerpublic.ger.corp.intel.com\PublicShare\Projects\FpgaFarmCloud

## Using ISSO Locally
### With Authentication 
1. Run npm install
2. Set the `USE_ISSO` parameter in the .env file to `true`.
3. Run the command `npm run dev`.
4. When the browser starts you will see `Network Error (tcp_error)`. Ignore that and wait until compilation process is over.
5. Go to your FQDN address to port 8080. [How to find my FDQN?](https://gitlab.devtools.intel.com/yturgema/fpga-farm-cloud/edit/dev/README.md#how-to-find-my-fqdn)
6. The browser will say `This site can’t provide a secure connection`. That's good!
7. Edit the url and remove the s from the https at the beginning. 
    for example: if the address is - https://yelfassy-mobl.ger.corp.intel.com:8080/validateisso?... then change it to - http://yelfassy-mobl.ger.corp.intel.com:8080/validateisso?...
    And press Enter.
8. You will see in the server console some authentication process and at the end the browser will say: `Cannot GET /`
9. Now go to your FQDN address to port 3000 and the site will work WITH ISSO authentication.

### Without Authentication
In `src/server/config/isso.js` under `authentication` we have dummy user data.
Setting `USE_ISSO` parameter in the .env file to `false` will make the site import the dummy user data.
You can chage the user's roles by editing the `Roles` array in this file.
Entering the website will be as usual using localhost:3000.


## How To Find My FQDN?
1. Go to `This PC`
2. Right click -> Properties
3. Find in the list `Full computer name`. this is your FQDN

## How To Publish site to CF? (you must have CF cli installed)
1. cd into publish folder
2. Execute: powershell -f publish.ps1 --help 
3. Understand which optional params you wish to use then re-execute with your params
3. e.g. - powershell -f publish.ps1 --login --test (will require re-login to CF and push to Test space)
