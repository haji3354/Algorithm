#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

int solution(int left, int right)
{
  int answer = 0;
  int result = 0;
  for (int i = left; i <= right; i++)
  {
    for (int j = 1; j <= i; j++)
    {
      if (i % j == 0)
      {
        result++;
      }
    }
    if (result % 2 == 0)
    {
      answer = answer + i;
    }
    else
    {
      answer = answer - i;
    }
    result = 0;
  }
  return answer;
}