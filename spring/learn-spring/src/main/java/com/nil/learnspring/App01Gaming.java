package com.nil.learnspring;

import com.nil.learnspring.game.*;

public class AppGaming {

    public static void main(String[] args) {
//        var game = new MarioGame();
//        var game = new SuperContra();
        var game = new Pubg();
        var gameRunner = new GameRunner(game); //Object creation + wiring of dependencies
        // ekhane game holo dependency of gamerunner mane gameRunner er akta game lagbei noito kake run korabe???
        gameRunner.run();
    }
}
