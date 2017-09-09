# use this file to generate the shakespeare dictionary should it need to be changed, be sure to have source text

# require 'marky_markov'
# markov = MarkyMarkov::Dictionary.new('dictionaries/shakespeare', 2) # Saves/opens dictionary.mmd

# markov.parse_file "seeds/shakespeare_sonnets.txt"
# markov.parse_file "seeds/shakespeare_plays.txt"
# markov.save_dictionary! # Saves the modified dictionary/creates one if it didn't exist.
# #
# puts markov.generate_1_sentences



# require 'json'

# file = open("will_play_text2.json")
# file = file.read

#   end



=begin
require 'marky_markov'
def run(source)
	convert_json_to_txt(source)
	parse(source)
end

def parse(source)
	dic_path = 'dictionaries/' + "#{source}"
	book = MarkyMarkov::Dictionary.new(dic_path, 2) # Saves/opens dictionary.mmd
	book.parse_file "seeds/#{source}.txt"
	book.save_dictionary!

	puts book.generate_1_sentences
end

require 'json'
def convert_json_to_txt(fileToConvert)
	file = open("json_to_convert/" + "#{fileToConvert}.json")
	file = file.read
	parsed = JSON.parse(file)
	file_path = 'seeds/' + "#{fileToConvert}"+ '.txt'
	open(file_path, 'a') do |f|
	  	parsed.each do |line|
	  		f << line.last['non_personalized'].join(" ").gsub("â€™","'").gsub("â€”","--")
	    	# if line['user']["id"]== 25073877 && line['text']!= nil
	    		# p line['text']
	      # 		f << line['text'] + ' '
	    	# end
		end
	end
end


run('trump')

=end

# TRUMP TWEET GENERATOR, run this from root of app, command -> dotenv bundle exec ruby app/data/generator.rb
# require_relative '../services/tweet_service'

# service = TweetService.new
# trump_tweets = service.get_tweets('realDonaldTrump')
# open('app/data/seeds/trump.txt', 'a') do |f|
# 	tweets = []
# 	trump_tweets.each do |tweet|
# 		# do note look at tweets with links in them
# 		unless tweet.full_text.match(/https?:\/\/[\S]+/)
# 			# filter out hashtags and user mentions, delete elipses (used to show continuity across multiple tweets)
# 			tweets << tweet.full_text.gsub(/#\S+/, '').gsub(/@\S+/, '').gsub(/\.\.\./, '')
# 		end
# 	end
# 	# store tweets chronologically
# 	tweets.reverse.each do |tweet|
# 		f << tweet + ' '
# 	end
# end
