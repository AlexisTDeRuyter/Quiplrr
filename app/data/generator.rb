require 'marky_markov'
markov = MarkyMarkov::Dictionary.new('shakespeare', 3) # Saves/opens dictionary.mmd

# markov.parse_file "shake.txt"

# markov.save_dictionary! # Saves the modified dictionary/creates one if it didn't exist.

puts markov.generate_1_sentences
