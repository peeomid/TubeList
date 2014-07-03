TubeList
=========
A simplified version of [Streamus](https://streamus.com/) (a chrome extension to play youtube musics), with no backend and added shortcut from youtube.

Overview
========

My purpose is to simplified Streamus:
- remove back-end need, just the chrome extension itself.
- remove social/sophisticated (e.g. radio) functions
- add bookmark to youtube page.


In short, it will just be a youtube playlist, no more or less. It will also suit better my flow, that I normally find something interesting on youtube itself, and want to add it from there, instead of searching in the extension again to add to playlist.


Client
------
* [jQuery (v2.0.3+)](http://jquery.com/)
* [jQuery UI (v1.10.3+)](http://jqueryui.com/) [AutoComplete and Sortable modules only]
* [BackboneJS (v1.0.0+)](http://backbonejs.org/)
* [RequireJS (v2.1.8+)](http://requirejs.org/)
* [UnderscoreJS (v1.5.1+)](http://underscorejs.org/)
* [Jasmine (v1.5.8+)](http://pivotal.github.io/jasmine/) [Coming soon...]



Installation
========

Client
------
1. Navigate to the page: chrome://extensions
2. Mark the checkbox 'Developer mode' as selected.
3. Click the button 'Load unpacked extensions...'
4. Select the Streamus directory title 'Chrome Extension' and click OK.
5. Run the extension.

* NOTE: If you wish to debug the client without a local server instance you will need to set 'localDebug' to false inside 'chrome extension/background/model/settings.js"


Supported Functionality
========

* YouTube search
* Add YouTube video to playlist (+from YouTube page)
* Add YouTube playlist as playlist
* Add YouTube channel as playlist
* Play, pause, skip, rewind, shuffle, repeat video, repeat playlist
* Desktop notifications of currently playing video
* Customizable keyboard shortcuts to control play, pause, skip, previous
* Enhancement of YouTube video pages with injected Streamus HTML
 
Usage Demo
========

A video explanation of how to use Streamus can be found at:
* "Streamus - Stream Bar Preview" - http://youtu.be/wjMLQWGYGOc

License
=======
This work is licensed under a [Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License](http://creativecommons.org/licenses/by-nc-nd/3.0/)

Authors
=======
Following are original authors of the extension:
* MeoMix - Original developer, main contributor.
* Misostc - Phenomenal user interfactor designer.
* MiracleBlue - Brought on as a second developer to help with work load.
