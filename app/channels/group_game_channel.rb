class GroupGameChannel < ApplicationCable::Channel
  def subscribed
    puts params
    stream_from "group_game_#{params[:room]}"
  end
end


# Somewhere in your app this is called, perhaps from a NewCommentJob
# ActionCable.server.broadcast \
#   "group_game_#{params[:id]}", { title: 'New things!', body: 'All the news that is fit to print' }
