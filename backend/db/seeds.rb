# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Location.create([
#   {name: "Mount Sanitas", state: "Colorado", city: "Boulder", country: "USA"},
#   {name: "Smith Rock", state: "Oregon", city: "Bend", country: "USA"},
#   {name: "Koko Head Park", state: "Hawaii", city: "Honolulu", country: "USA"},
#   {name: "Camelback Mountain", state: "Arizona", city: "Scottsdale", country: "USA"}
# ])

# Tree.create([
#   {name: "Ponderose Pine", tree_type: "Pine", height: "Tall"},
#   {name: "Maple", tree_type: "Maple", height: "Medium"},
#   {name: "Palm Tree", tree_type: "Palm", height: "Tall"},
#   {name: "Cherry Blossom", tree_type: "Pretty", height: "Small"},
#   {name: "Desert Willow", tree_type: "Pretty", height: "Medium"}
# ])

Location.find_by_id(1).update(tree_ids: [1, 2])
Location.find_by_id(2).update(tree_ids: [1, 2, 3, 4])
Location.find_by_id(3).update(tree_ids: [2, 3, 4])
Location.find_by_id(4).update(tree_ids: [1, 5])
Location.find_by_id(5).update(tree_ids: [1])