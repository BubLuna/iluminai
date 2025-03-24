import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./Button"

interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  page: number
  totalCount: number
  pageSize: number
  siblingCount?: number
  className?: string
  onPageChange: (page: number) => void
}

const DOTS = "DOTS"

function usePagination({
  totalCount,
  pageSize,
  siblingCount = 1,
  page,
  onPageChange,
}: {
  totalCount: number
  pageSize: number
  siblingCount?: number
  page: number
  onPageChange: (page: number) => void
}) {
  const paginationRange = React.useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as:
    // Total pages + First page + Last page + Two dots
    const totalNumbers = siblingCount * 2 + 3
    if (totalNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(page - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      page + siblingCount,
      totalPageCount
    )

    // We do not want to show dots if there is only one position left
    // after/before the left and right page count.
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }

    return []
  }, [totalCount, pageSize, siblingCount, page])

  return paginationRange

  function range(start: number, end: number) {
    const length = end - start + 1
    return Array.from({ length }, (_, i) => start + i)
  }
}

export const Pagination = ({
  page,
  totalCount,
  pageSize,
  siblingCount,
  className,
  onPageChange,
  ...props
}: PaginationProps) => {
  const paginationRange = usePagination({
    page,
    totalCount,
    pageSize,
    siblingCount,
    onPageChange,
  })

  if (page === 0 || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(page + 1)
  }

  const onPrevious = () => {
    onPageChange(page - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1] as number

  return (
    <div
      className={cn("mx-auto flex w-full items-center justify-center", className)}
      {...props}
    >
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={onPrevious}
        disabled={page === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Go to previous page</span>
      </Button>
      <ul className="mx-2 flex items-center gap-1">
        {paginationRange?.map((item, index) => {
          if (item === DOTS) {
            return (
              <li key={index}>
                <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  disabled
                >
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More pages</span>
                </Button>
              </li>
            )
          }

          return (
            <li key={index}>
              <Button
                variant="outline"
                className={cn(
                  "h-8 w-8 p-0",
                  page === item && "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => onPageChange(item as number)}
              >
                {item}
              </Button>
            </li>
          )
        })}
      </ul>
      <Button
        variant="outline"
        className="h-8 w-8 p-0"
        onClick={onNext}
        disabled={page === lastPage}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Go to next page</span>
      </Button>
    </div>
  )
}
