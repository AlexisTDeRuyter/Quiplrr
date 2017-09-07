require 'marky_markov'
markov = MarkyMarkov::Dictionary.new('dictionaries/shakespeare', 2) # Saves/opens dictionary.mmd

# markov.parse_file "seeds/shakespeare_sonnets.txt"
#
# markov.save_dictionary! # Saves the modified dictionary/creates one if it didn't exist.

puts markov.generate_1_sentences
