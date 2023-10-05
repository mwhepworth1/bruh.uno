module.exports = {
    generate: async function(charCount) {
        let str = '';
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
        let charLength = chars.length;
        let count = 0;

        while (count < charCount) {
            str += chars.charAt(Math.floor(Math.random()*charLength));
            count++;
        }
        return str;
    }
}