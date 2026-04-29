"use strict";
/*
 * Q.4 TypeScript Logic using callbacks and setTimeout.
 * Compiled via exact structure necessary for the web UI interaction.
 */
Object.defineProperty(exports, "__esModule", { value: true });
$(document).ready(() => {
    // Helper functions for updating DOM
    const updateDOM = (id, text) => {
        $(id).text(text).hide().fadeIn(300);
    };
    // --- A. Factorial ---
    const calculateFactorial = (n) => {
        if (n < 0)
            throw new Error("Factorial not for negative numbers.");
        if (n === 0 || n === 1)
            return 1;
        let fact = 1;
        for (let i = 2; i <= n; i++)
            fact *= i;
        return fact;
    };
    // Callback Pattern
    $('#btn-fact-cb').click(() => {
        const val = parseInt($('#num-fact').val());
        if (isNaN(val))
            return updateDOM('#res-fact', 'Please enter a valid number.');
        // Execute logic via a callback wrapper
        const execute = (num, cb) => {
            try {
                cb(calculateFactorial(num));
            }
            catch (e) {
                cb(e.message);
            }
        };
        execute(val, (res) => updateDOM('#res-fact', `[Callback] Factorial of ${val} is: ${res}`));
    });
    // setTimeout Pattern
    $('#btn-fact-st').click(() => {
        const val = parseInt($('#num-fact').val());
        if (isNaN(val))
            return updateDOM('#res-fact', 'Please enter a valid number.');
        updateDOM('#res-fact', 'Calculating asynchronously...');
        setTimeout(() => {
            try {
                const res = calculateFactorial(val);
                updateDOM('#res-fact', `[setTimeout] Factorial of ${val} is: ${res}`);
            }
            catch (e) {
                updateDOM('#res-fact', e.message);
            }
        }, 1200);
    });
    // --- B. Armstrong Number ---
    const checkArmstrong = (n) => {
        const str = n.toString();
        const digits = str.length;
        let sum = 0;
        for (let char of str) {
            sum += Math.pow(parseInt(char), digits);
        }
        return sum === n;
    };
    $('#btn-arm-cb').click(() => {
        const val = parseInt($('#num-arm').val());
        if (isNaN(val))
            return updateDOM('#res-arm', 'Please enter a valid number.');
        const execute = (num, cb) => cb(checkArmstrong(num));
        execute(val, (isArm) => updateDOM('#res-arm', `[Callback] Is ${val} Armstrong? ${isArm ? 'YES' : 'NO'}`));
    });
    $('#btn-arm-st').click(() => {
        const val = parseInt($('#num-arm').val());
        if (isNaN(val))
            return updateDOM('#res-arm', 'Please enter a valid number.');
        updateDOM('#res-arm', 'Analyzing asynchronously...');
        setTimeout(() => {
            const isArm = checkArmstrong(val);
            updateDOM('#res-arm', `[setTimeout] Is ${val} Armstrong? ${isArm ? 'YES' : 'NO'}`);
        }, 1200);
    });
    // --- C. Palindrome Number ---
    const checkPalindrome = (n) => {
        const str = n.toString();
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };
    $('#btn-pal-cb').click(() => {
        const val = parseInt($('#num-pal').val());
        if (isNaN(val))
            return updateDOM('#res-pal', 'Please enter a valid number.');
        const execute = (num, cb) => cb(checkPalindrome(num));
        execute(val, (isPal) => updateDOM('#res-pal', `[Callback] Is ${val} Palindrome? ${isPal ? 'YES' : 'NO'}`));
    });
    $('#btn-pal-st').click(() => {
        const val = parseInt($('#num-pal').val());
        if (isNaN(val))
            return updateDOM('#res-pal', 'Please enter a valid number.');
        updateDOM('#res-pal', 'Analyzing asynchronously...');
        setTimeout(() => {
            const isPal = checkPalindrome(val);
            updateDOM('#res-pal', `[setTimeout] Is ${val} Palindrome? ${isPal ? 'YES' : 'NO'}`);
        }, 1200);
    });
    // --- D. Simple & Compound Interest ---
    const calculateInterest = (p, r, t) => {
        const simple = (p * r * t) / 100;
        const compound = p * (Math.pow((1 + r / 100), t)) - p;
        return { simple, compound };
    };
    $('#btn-int-cb').click(() => {
        const p = parseFloat($('#principal').val());
        const r = parseFloat($('#rate').val());
        const t = parseFloat($('#time').val());
        if (isNaN(p) || isNaN(r) || isNaN(t))
            return updateDOM('#res-int', 'Enter P, R, and T properly.');
        const execute = (p, r, t, cb) => cb(calculateInterest(p, r, t));
        execute(p, r, t, (res) => {
            updateDOM('#res-int', `[Callback] SI: ₹${res.simple.toFixed(2)} | CI: ₹${res.compound.toFixed(2)}`);
        });
    });
    $('#btn-int-st').click(() => {
        const p = parseFloat($('#principal').val());
        const r = parseFloat($('#rate').val());
        const t = parseFloat($('#time').val());
        if (isNaN(p) || isNaN(r) || isNaN(t))
            return updateDOM('#res-int', 'Enter P, R, and T properly.');
        updateDOM('#res-int', 'Calculating financial data limitlessly...');
        setTimeout(() => {
            const res = calculateInterest(p, r, t);
            updateDOM('#res-int', `[setTimeout] SI: ₹${res.simple.toFixed(2)} | CI: ₹${res.compound.toFixed(2)}`);
        }, 1200);
    });
});
//# sourceMappingURL=script.js.map