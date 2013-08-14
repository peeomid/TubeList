﻿define([
    'streamItems',
    'player',
    'playerState'
], function (StreamItems, Player, PlayerState) {
    'use strict';

    var throttledConsoleLog = _.throttle(function () {
        var args = [];
        
        for (var i = 0; i < arguments.length; i++) {
            args.push(arguments[i]);
        }

        console.log(args.join(' '));
    }, 1000);

    var VideoDisplayView = Backbone.View.extend({
        el: $('#VideoDisplayView'),
        
        events: {
            click: 'togglePlayerState'
        },

        render: function () {
            var self = this;

            throttledConsoleLog("Rendering:", window != null);
            
            //  Stop drawing entirely when the player stops.
            if (window != null) {

                var streamItemExists = StreamItems.length > 0;
                this.$el.toggleClass('clickable', streamItemExists);
                
                if (streamItemExists) {                    

                    var playerState = Player.get('state');
                    
                    throttledConsoleLog("Player State:", playerState);

                    if (playerState == PlayerState.PLAYING) {
                        //  Continously render if playing.
                        if (playerState == PlayerState.PLAYING) {

                            window.requestAnimationFrame(function () {
                                self.render();
                            });

                        }
                        
                        this.context.drawImage(this.video, 0, 0, this.el.width, this.el.height);
                    }
                    else if (Player.get('currentTime') > 0) {
                        //  The player might open while paused. Render the current video frame, but don't continously render until play starts.
                        this.context.drawImage(this.video, 0, 0, this.el.width, this.el.height);
                    }
                    else {
                        //  TODO: When Streamus pauses the video image degrades because this is drawing instead of using the loaded video's current time.
                        var loadedVideoId = Player.get('loadedVideoId');

                        throttledConsoleLog("Drawing default:", loadedVideoId, playerState);
                        if (loadedVideoId != '') {

                            this.videoDefaultImage.src = 'http://i2.ytimg.com/vi/' + loadedVideoId + '/mqdefault.jpg ';
                        }

                    }
                    
                } else {
                    throttledConsoleLog("Stream item doesn't exist, painting black.");

                    setTimeout(function() {
                        //  Clear the canvas by painting over it with black.
                        //  TODO: Perhaps something more visually appealing / indicative than black fill?
                        self.context.rect(0, 0, self.el.width, self.el.height);
                        self.context.fillStyle = 'black';
                        self.context.fill();
                    }, 0);

                }
                
            }
        },
            
        togglePlayerState: function () {
            
            if (StreamItems.length > 0) {
                
                if (Player.isPlaying()) {
                    Player.pause();
                } else {
                    Player.play();
                }

            }

        },
        
        videoDefaultImage: new Image(),
        
        initialize: function () {

            this.context = this.el.getContext('2d');
            this.video = $(chrome.extension.getBackgroundPage().document).find('#YouTubeVideo')[0];

            var self = this;
            this.videoDefaultImage.onload = function () {
                self.context.drawImage(this, 0, 0, self.el.width, self.el.height);
            };
            
            this.listenTo(Player, 'change:state', this.render);
            this.listenTo(StreamItems, 'add addMultiple empty change:selected', this.render);

            this.render();
        }
    });

    return new VideoDisplayView;
});