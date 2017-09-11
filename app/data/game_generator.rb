require_relative 'random_sentence_generator'
class GameGenerator
	def initialize
		@real_Sentence = RealSentence.new('seeds/trumplrr/trumplrr_160_000.txt') #with .txt
		@fake_Sentence = FakeSentence.new('dictionaries/trumplrr') #without .mmd
	end

	def load_real_sentence
		@real_Sentence.choose_sentence
	end

	def load_fake_sentence
		@fake_Sentence.choose_sentence
	end
end

game = GameGenerator.new
p game.load_real_sentence
p game.load_fake_sentence

