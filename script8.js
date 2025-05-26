class Solution {
    ArrayList<Integer> countDistinct(int arr[], int k) {
        ArrayList<Integer> result = new ArrayList<>();
        HashMap<Integer, Integer> map = new HashMap<>();

        // First window
        for (int i = 0; i < k; i++) {
            map.put(arr[i], map.getOrDefault(arr[i], 0) + 1);
        }
        result.add(map.size());

        // Slide the window
        for (int i = k; i < arr.length; i++) {
            // Remove the first element of the previous window
            int outgoing = arr[i - k];
            map.put(outgoing, map.get(outgoing) - 1);
            if (map.get(outgoing) == 0) {
                map.remove(outgoing);
            }

            // Add the new element
            int incoming = arr[i];
            map.put(incoming, map.getOrDefault(incoming, 0) + 1);

            result.add(map.size());
        }

        return result;
    }
}

int incoming = arr[i];
map.put(incoming, map.getOrDefault(incoming, 0) + 1);
