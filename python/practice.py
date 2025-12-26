def custom_reverse(s):
    first = s[:6]      # tharun
    second = s[6:]     # tnani

    first_rev = first[::-1]          # reverse
    second_rot = second[1:] + second[0]  # left rotate by 1

    return second_rot + first_rev
print(custom_reverse("tharuntnani"))
