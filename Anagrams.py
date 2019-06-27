from sympy import sieve


def first_pass_anagrams(words):

    chars = list(sieve.primerange(4, 109))

    anagrams = {}

    for word in words:
        sig = "".join(sorted(word.lower()))
        if sig not in anagrams:
            anagrams[sig] = []
            anagrams[sig].append(word)
        if longest == None or len(anagrams[sig]) > len(anagrams[longest]):
            longest = sig
