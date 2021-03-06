"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Telegraf_1 = require("Telegraf");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var bot = new Telegraf_1.Telegraf(process.env.TOKEN);
bot.start(function (ctx) {
    return ctx.reply('Use inline mode to send gooz sounds to your chats');
});
bot.help(function (ctx) { return ctx.reply('💨'); });
bot.on('callback_query', function (ctx) {
    ctx.telegram.answerCbQuery(ctx.callbackQuery.id);
});
bot.on('inline_query', function (ctx) {
    console.log(ctx.inlineQuery.query);
    var results = [
        {
            type: 'article',
            id: 'someID',
            title: 'someTitle',
            description: 'someDesc',
            thumb_url: 'img_url',
            url: 'url',
            input_message_content: '',
        },
    ];
    ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, results);
});
console.log('Starting Gooz bot...');
bot.launch();
