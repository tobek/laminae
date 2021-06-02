#!/bin/bash

# Usage:
#
#     csv utils/progress.csv # aka `cat utils/progress.csv | column -t -s,`
#     utils/stats.sh # just outputs
#     utils/stats.sh 1 # worked 1 hour (SAVE FIRST)

set -eo pipefail

SCRIPT_DIR="$(dirname "$0")"
LAMINAE_FILE="$SCRIPT_DIR/../index.yml"
TODO_FILE="$SCRIPT_DIR/../todo.md"

HOURS_PER_STAGE=3
HOURS_PER_WEEK=15

TODO_ITEMS=$(grep -o "## ◍\|## ●\|## ▤\|## ■\|## □\|## ○" "$TODO_FILE" | wc -l)
TODO_ITEMS=$((TODO_ITEMS - 3)) # gondola owl, calligraphy, peristalsis
TODO_READY=$(grep -o "●\|■" "$TODO_FILE" | wc -l)
TODO_COMPLETE=$(grep -o "◍\|●\|▤\|■" "$TODO_FILE" | wc -l)
TODO_REMAINING=$(grep -o "□\|○" "$TODO_FILE" | wc -l)
TODO_TOTAL=$((TODO_COMPLETE + TODO_REMAINING))

LAMINAE=27
LAMINAE_READY=$(grep -o "●" "$LAMINAE_FILE" | wc -l)
LAMINAE_COMPLETE=$(grep -o '◍\|●' "$LAMINAE_FILE" | wc -l)
LAMINAE_REMAINING=$(grep -o '○' "$LAMINAE_FILE" | wc -l)
LAMINAE_TOTAL=$((LAMINAE_COMPLETE + LAMINAE_REMAINING))

TOTAL_READY=$((TODO_READY + LAMINAE_READY))
TOTAL_ITEMS=$((TODO_ITEMS + LAMINAE))
TOTAL_COMPLETE=$((TODO_COMPLETE + LAMINAE_COMPLETE))
TOTAL_COMPLETE=$((TODO_COMPLETE + LAMINAE_COMPLETE))
TOTAL_REMAINING=$((TODO_REMAINING + LAMINAE_REMAINING))
TOTAL_TOTAL=$((TODO_TOTAL + LAMINAE_TOTAL))

REMAINING_HOURS=$((TOTAL_REMAINING * HOURS_PER_STAGE))
REMAINING_WEEKS=$((REMAINING_HOURS / HOURS_PER_WEEK))

TODO_NEEDED_FOR_READY=$((TODO_TOTAL * 3 / 4))
LAMINAE_NEEDED_FOR_READY=$((LAMINAE_TOTAL * 3 / 6))
TOTAL_REMAINING_TIL_READY=$((TODO_NEEDED_FOR_READY + LAMINAE_NEEDED_FOR_READY - TODO_COMPLETE - LAMINAE_COMPLETE))
REMAINING_TIL_READY_HOURS=$((TOTAL_REMAINING_TIL_READY * HOURS_PER_STAGE))
REMAINING_TIL_READY_WEEKS=$((REMAINING_TIL_READY_HOURS / HOURS_PER_WEEK))


COMPLETE_PERCENT=$((100 * TOTAL_COMPLETE / TOTAL_TOTAL))%
READY_PERCENT=$((100 * TOTAL_READY / TOTAL_ITEMS))%

AT_0=$(grep -c "'○○○○○○" "$LAMINAE_FILE") || true
AT_1=$(grep -c "'◍○○○○○\|'●○○○○○" "$LAMINAE_FILE") || true
AT_2=$(grep -c "'◍◍○○○○\|'●◍○○○○" "$LAMINAE_FILE") || true
AT_3=$(grep -c "'◍◍◍○○○\|'●◍◍○○○" "$LAMINAE_FILE") || true
AT_4=$(grep -c "'◍◍◍◍○○\|'●◍◍◍○○" "$LAMINAE_FILE") || true
AT_5=$(grep -c "'◍◍◍◍◍○\|'●◍◍◍◍○" "$LAMINAE_FILE") || true
AT_6=$(grep -c "'●◍◍◍◍◍" "$LAMINAE_FILE") || true

WORDS=$(cat ./[0-9]*.md | wc -w)
TITLE_WORDS=$(wc -w < 00-0-title.md) # mostly HTML
WORDS=$((WORDS - TITLE_WORDS))
WIP_WORDS=$(wc -w < all.md) # non-numbered but actual content
WORDS=$((WORDS + WIP_WORDS))

LOC=$(cat ./*.sh build.py template.html index.yml utils/*.sh firebase/functions/src/index.ts | wc -l)
LOC=$((LOC + 137)) # eh add the css in title.md

if [ -n "$1" ]
then
    DATE=$(date +%Y-%m-%d)
    ADDITIONAL_HOURS="$1"
    echo "$DATE,$ADDITIONAL_HOURS,$WORDS,$LOC,$READY_PERCENT,$COMPLETE_PERCENT,$TOTAL_READY,$TOTAL_COMPLETE,$LAMINAE_COMPLETE,$TODO_COMPLETE" >> "$SCRIPT_DIR"/progress.csv
fi

echo -e "BY PLANE\n"
grep "^    '" "$LAMINAE_FILE" | python -c "import sys; [print(l.strip('- \':\n')) for l in sys.stdin]"
echo -e "\nBY STAGE\n"
grep "^    '" "$LAMINAE_FILE" | python -c "import sys; [print(l.strip('- \':\n')) for l in sys.stdin]" | sort --version-sort
echo
echo "◍◍◍◍◍◍ $AT_6"
echo "◍◍◍◍◍○ $AT_5"
echo "◍◍◍◍○○ $AT_4"
echo "◍◍◍○○○ $AT_3"
echo "◍◍○○○○ $AT_2"
echo "◍○○○○○ $AT_1"
echo "○○○○○○ $AT_0"

echo
echo "BLOOPS"
echo
echo -n Laminae: "$LAMINAE_COMPLETE/$LAMINAE_TOTAL "
echo \($((100 * LAMINAE_COMPLETE / LAMINAE_TOTAL))%\)
echo -n Todos: "$TODO_COMPLETE/$TODO_TOTAL "
echo \($((100 * TODO_COMPLETE / TODO_TOTAL))%\)
echo -n Total: "$TOTAL_COMPLETE/$TOTAL_TOTAL "
echo \($COMPLETE_PERCENT\)
echo
echo $REMAINING_HOURS hours @ ${HOURS_PER_STAGE}h/stage
echo $REMAINING_WEEKS weeks @ ${HOURS_PER_WEEK}h/week
echo
echo Bloops left til ready: $TOTAL_REMAINING_TIL_READY
echo $REMAINING_TIL_READY_HOURS hours @ ${HOURS_PER_STAGE}h/stage
echo $REMAINING_TIL_READY_WEEKS weeks @ ${HOURS_PER_WEEK}h/week
echo

echo "READY"
echo
echo -n Laminae : "$LAMINAE_READY/$LAMINAE "
echo \($((100 * LAMINAE_READY / LAMINAE))%\)
echo -n Todos: "$TODO_READY/$TODO_ITEMS "
echo \($((100 * TODO_READY / TODO_ITEMS))%\)
echo -n Total: "$TOTAL_READY/$TOTAL_ITEMS "
echo \($READY_PERCENT\)
echo

echo "Total words: $(printf "%'.f\n" $WORDS)"
echo "Total LOC: $(printf "%'.f\n" $LOC)"

cat progress-part-1.md > progress.md
tac utils/progress.csv | head -n -1 | column -t -s , -o '|' | sed s/$/\|/ | sed s/^/\|/ >> progress.md
cat progress-part-2.md >> progress.md
echo "| $(printf "%'.f\n" $WORDS) | $(printf "%'.f\n" $LOC) | $TOTAL_READY/$TOTAL_ITEMS | $TOTAL_COMPLETE/$TOTAL_TOTAL |" >> progress.md
cat progress-part-3.md >> progress.md
