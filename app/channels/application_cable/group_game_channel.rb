class GroupGameChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'group_game_#{params[:id]}'
  end
end


# Somewhere in your app this is called, perhaps from a NewCommentJob
# ActionCable.server.broadcast \
#   "group_game_#{params[:id]}", { title: 'New things!', body: 'All the news that is fit to print' }
