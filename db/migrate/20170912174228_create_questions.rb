class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :quote
      t.boolean :is_real
      t.integer :group_game_id

      t.timestamps
    end
  end
end
