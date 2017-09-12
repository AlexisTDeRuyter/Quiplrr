class CreatePlayers < ActiveRecord::Migration[5.1]
  def change
    create_table :players do |t|
      t.string :username
      t.integer :group_game_id
      t.string :group_game_token

      t.timestamps
    end
  end
end
