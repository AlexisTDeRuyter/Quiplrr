class CreateGroupGames < ActiveRecord::Migration[5.1]
  def change
    create_table :group_games do |t|
      t.string :source
      t.string :token

      t.timestamps
    end
  end
end
