// Language file for edinfo.js
// ===========================

// Online, and playing Elite: Dangerous
// ------------------------------------
$.lang.register('edinfo.playing.shipwitha', 'The ship $1 is piloting is an $2 which is called "$3".');
$.lang.register('edinfo.playing.shipwithouta', 'The ship $1 is piloting is a $2 which is called "$3".');
$.lang.register('edinfo.playing.systemdocked', '$1 is in the $2 system and is currently docked at $3.');
$.lang.register('edinfo.playing.systemflying', '$1 is currently flying around in the $2 system.');
$.lang.register('edinfo.playing.shipbuild.current', 'If you want to look at the current $1 build, take a look on EDSM here --> $2');
$.lang.register('edinfo.playing.shipbuild.notlogged', 'The loadout information for the current ship has not been added to to the database.');
$.lang.register('edinfo.playing.shipbuild.addnoname', 'Unable to add ship to the database, a ship name was not specified.');
$.lang.register('edinfo.playing.shipbuild.addnoURL', 'Unable to add ship to the database, the build URL for the ship was not specified.');
$.lang.register('edinfo.playing.shipbuild.addsuccess', 'The build information for $1 was successfully added to the database with the build URL of --> $2');
$.lang.register('edinfo.playing.shipbuild.delnoname', 'Unable to delete the specified ship as no ship name was given.');
$.lang.register('edinfo.playing.shipbuild.delnokey', 'Unable to delete the specified ship as it does not exist in the database.');
$.lang.register('edinfo.playing.shipbuild.delsuccess', 'The build information for $1 was successfully deleted from the database.');
$.lang.register('edinfo.playing.shipbuild.updatenoname', 'Unable to update the ship build on the database, a ship name was not specified.');
$.lang.register('edinfo.playing.shipbuild.updatenoURL', 'Unable to update the ship build on the database, the new build URL for the ship was not specified.');
$.lang.register('edinfo.playing.shipbuild.updatesuccess', 'The build information for $1 was successfully updated within the database with the new build URL of --> $2');
$.lang.register('edinfo.playing.edcareers', 'Want to see what careers you can embark upon in Elite: Dangerous?  Take a look at this image made by CMDR Qohen Leth for the options that are available --> https://iand.live/EDCareers');

// Online, but playing something else
// ----------------------------------
$.lang.register('edinfo.playing.othergame', '$1 is not playing Elite:Dangerous right now');

// EDInfo offline mode toggle responses
// ------------------------------------
$.lang.register('edinfo.offlinemodetrue', 'EDInfo allowed to be used in offline mode.');
$.lang.register('edinfo.offlinemodefalse', 'EDInfo set to be used only while playing the game.');

// EDInfo text file path responses
// -------------------------------
$.lang.register('edinfo.nofilepathset', 'A file path was not set for the location of the EDDiscovery OBS text files.');
$.lang.register('edinfo.obsfilepathset', 'The path to the location of the OBS text files has been set to: $1');
$.lang.register('edinfo.needtosetpath', 'A path needs to be set for the location of the EDDiscovery OBS text files.  Usage: !edinfopath <PATH TO FILES i.e. C:/SomeTextFiles/>');

// EDInfo CMDR Name responses
// --------------------------
$.lang.register('edinfo.cmdrname.notspecified', 'A name has to be specified so that it can be changed within the database.');
$.lang.register('edinfo.cmdrname.nameupdated', 'The CMDR name for the EDInfo module has been updated to: $1');