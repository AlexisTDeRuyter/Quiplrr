module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :player

    def connect
      self.player = Player.create(username: params[:username])
    end
  end
end
