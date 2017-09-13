module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :player

    def connect
      self.player = request.params[:username]
    end
  end
end
