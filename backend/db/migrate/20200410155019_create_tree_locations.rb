class CreateTreeLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :tree_locations do |t|
      t.belongs_to :tree, foreign_key: true
      t.belongs_to :location, foreign_key: true

      t.timestamps
    end
  end
end
