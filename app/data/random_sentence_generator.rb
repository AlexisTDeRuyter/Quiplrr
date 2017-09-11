class RealSentence
	def initialize(path)
		@file = File.read(path)
		@sentences = @file.split(".")
		@length = @sentences.length
	end

	# def print_all
	# 	puts @file
	# end

	def choose_sentence
		random_index = Random.new_seed % @length
		returning_sentence = @sentences[random_index].lstrip + "."

		if !( returning_sentence.length > 10 && returning_sentence.length < 20 )
			returning_sentence
		else
			choose_sentence
		end
	end
end

require 'marky_markov'
class FakeSentence
	def initialize(path)
		@file = MarkyMarkov::Dictionary.new(path, 2)
	end

	def choose_sentence
		returning_sentence = @file.generate_1_sentences
		if !( returning_sentence.length > 10 && returning_sentence.length < 20 )
			returning_sentence
		else
			choose_sentence
		end
	end

end





