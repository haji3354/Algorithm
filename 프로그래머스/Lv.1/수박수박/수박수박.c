#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

char *solution(int n)
{

  char *answer = (char *)malloc(sizeof(char) * (n + 1) * 3);
  strcpy(answer, "");
  for (int i = 1; i <= n; i++)
  {
    if (i % 2 == 1)
      strcat(answer, "수");
    else
      strcat(answer, "박");
  }
  return answer;
}