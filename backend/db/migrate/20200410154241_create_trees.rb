class CreateTrees < ActiveRecord::Migration[5.2]
  def change
    create_table :trees do |t|
      t.string :name
      t.string :tree_type
      t.string :height

      t.timestamps
    end
  end
end
