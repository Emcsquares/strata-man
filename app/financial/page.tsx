"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  DollarSign,
  Calendar,
  Download,
  PieChart,
  BarChart3,
  TrendingUp,
  FileText,
  ArrowRight,
  Info,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function FinancialPage() {
  const [activeYear, setActiveYear] = useState("2023")
  const [activeQuarter, setActiveQuarter] = useState("Q2")

  // Sample financial data
  const financialData = {
    "2023": {
      Q1: {
        adminFund: {
          opening: 125000,
          income: 48000,
          expenses: 42500,
          closing: 130500,
        },
        capitalWorksFund: {
          opening: 350000,
          income: 24000,
          expenses: 15000,
          closing: 359000,
        },
        levyDetails: {
          adminLevy: 800,
          capitalWorksLevy: 400,
          dueDate: "2023-02-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Building Insurance", amount: 22000 },
          { item: "Cleaning Services", amount: 7500 },
          { item: "Gardening & Landscaping", amount: 4500 },
          { item: "Electricity (Common Areas)", amount: 3800 },
          { item: "Water (Common Areas)", amount: 2700 },
        ],
      },
      Q2: {
        adminFund: {
          opening: 130500,
          income: 48000,
          expenses: 38000,
          closing: 140500,
        },
        capitalWorksFund: {
          opening: 359000,
          income: 24000,
          expenses: 5000,
          closing: 378000,
        },
        levyDetails: {
          adminLevy: 800,
          capitalWorksLevy: 400,
          dueDate: "2023-05-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Elevator Maintenance", amount: 12000 },
          { item: "Cleaning Services", amount: 7500 },
          { item: "Gardening & Landscaping", amount: 4500 },
          { item: "Electricity (Common Areas)", amount: 4200 },
          { item: "Water (Common Areas)", amount: 3100 },
        ],
      },
      Q3: {
        adminFund: {
          opening: 140500,
          income: 48000,
          expenses: 45000,
          closing: 143500,
        },
        capitalWorksFund: {
          opening: 378000,
          income: 24000,
          expenses: 0,
          closing: 402000,
        },
        levyDetails: {
          adminLevy: 800,
          capitalWorksLevy: 400,
          dueDate: "2023-08-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Plumbing Repairs", amount: 15000 },
          { item: "Cleaning Services", amount: 7500 },
          { item: "Gardening & Landscaping", amount: 4500 },
          { item: "Electricity (Common Areas)", amount: 4800 },
          { item: "Water (Common Areas)", amount: 3200 },
        ],
      },
      Q4: {
        adminFund: {
          opening: 143500,
          income: 48000,
          expenses: 40000,
          closing: 151500,
        },
        capitalWorksFund: {
          opening: 402000,
          income: 24000,
          expenses: 80000,
          closing: 346000,
        },
        levyDetails: {
          adminLevy: 800,
          capitalWorksLevy: 400,
          dueDate: "2023-11-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Roof Repairs", amount: 80000 },
          { item: "Cleaning Services", amount: 7500 },
          { item: "Gardening & Landscaping", amount: 4500 },
          { item: "Electricity (Common Areas)", amount: 4500 },
          { item: "Water (Common Areas)", amount: 3000 },
        ],
      },
    },
    "2022": {
      Q1: {
        adminFund: {
          opening: 110000,
          income: 45000,
          expenses: 40000,
          closing: 115000,
        },
        capitalWorksFund: {
          opening: 320000,
          income: 22500,
          expenses: 10000,
          closing: 332500,
        },
        levyDetails: {
          adminLevy: 750,
          capitalWorksLevy: 375,
          dueDate: "2022-02-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Building Insurance", amount: 20000 },
          { item: "Cleaning Services", amount: 7000 },
          { item: "Gardening & Landscaping", amount: 4000 },
          { item: "Electricity (Common Areas)", amount: 3500 },
          { item: "Water (Common Areas)", amount: 2500 },
        ],
      },
      Q2: {
        adminFund: {
          opening: 115000,
          income: 45000,
          expenses: 42000,
          closing: 118000,
        },
        capitalWorksFund: {
          opening: 332500,
          income: 22500,
          expenses: 20000,
          closing: 335000,
        },
        levyDetails: {
          adminLevy: 750,
          capitalWorksLevy: 375,
          dueDate: "2022-05-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Security System Upgrade", amount: 20000 },
          { item: "Cleaning Services", amount: 7000 },
          { item: "Gardening & Landscaping", amount: 4000 },
          { item: "Electricity (Common Areas)", amount: 3800 },
          { item: "Water (Common Areas)", amount: 2700 },
        ],
      },
      Q3: {
        adminFund: {
          opening: 118000,
          income: 45000,
          expenses: 38000,
          closing: 125000,
        },
        capitalWorksFund: {
          opening: 335000,
          income: 22500,
          expenses: 7500,
          closing: 350000,
        },
        levyDetails: {
          adminLevy: 750,
          capitalWorksLevy: 375,
          dueDate: "2022-08-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "Painting (Common Areas)", amount: 7500 },
          { item: "Cleaning Services", amount: 7000 },
          { item: "Gardening & Landscaping", amount: 4000 },
          { item: "Electricity (Common Areas)", amount: 4100 },
          { item: "Water (Common Areas)", amount: 2900 },
        ],
      },
      Q4: {
        adminFund: {
          opening: 125000,
          income: 45000,
          expenses: 45000,
          closing: 125000,
        },
        capitalWorksFund: {
          opening: 350000,
          income: 22500,
          expenses: 22500,
          closing: 350000,
        },
        levyDetails: {
          adminLevy: 750,
          capitalWorksLevy: 375,
          dueDate: "2022-11-01",
          paymentMethods: ["Direct Deposit", "Credit Card", "Check"],
        },
        majorExpenses: [
          { item: "HVAC Maintenance", amount: 15000 },
          { item: "Cleaning Services", amount: 7000 },
          { item: "Gardening & Landscaping", amount: 4000 },
          { item: "Electricity (Common Areas)", amount: 4500 },
          { item: "Water (Common Areas)", amount: 3000 },
        ],
      },
    },
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD" }).format(amount)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString("en-AU", options)
  }

  const currentData = financialData[activeYear][activeQuarter]

  // Calculate percentages for the progress bars
  const calculatePercentage = (value: number, total: number) => {
    return Math.round((value / total) * 100)
  }

  const adminExpensePercentage = calculatePercentage(
    currentData.adminFund.expenses,
    currentData.adminFund.opening + currentData.adminFund.income,
  )

  const capitalExpensePercentage = calculatePercentage(
    currentData.capitalWorksFund.expenses,
    currentData.capitalWorksFund.opening + currentData.capitalWorksFund.income,
  )

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-heading">Financial Management</span>
        </h1>
        <p className="text-xl text-muted-foreground">Track strata levies, financial reports, and fund balances</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <div className="flex gap-2">
            <Button
              variant={activeYear === "2023" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveYear("2023")}
              className={activeYear === "2023" ? "bg-primary hover:bg-primary/90" : ""}
            >
              2023
            </Button>
            <Button
              variant={activeYear === "2022" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveYear("2022")}
              className={activeYear === "2022" ? "bg-primary hover:bg-primary/90" : ""}
            >
              2022
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              variant={activeQuarter === "Q1" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveQuarter("Q1")}
              className={activeQuarter === "Q1" ? "bg-primary hover:bg-primary/90" : ""}
            >
              Q1 (Jan-Mar)
            </Button>
            <Button
              variant={activeQuarter === "Q2" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveQuarter("Q2")}
              className={activeQuarter === "Q2" ? "bg-primary hover:bg-primary/90" : ""}
            >
              Q2 (Apr-Jun)
            </Button>
            <Button
              variant={activeQuarter === "Q3" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveQuarter("Q3")}
              className={activeQuarter === "Q3" ? "bg-primary hover:bg-primary/90" : ""}
            >
              Q3 (Jul-Sep)
            </Button>
            <Button
              variant={activeQuarter === "Q4" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveQuarter("Q4")}
              className={activeQuarter === "Q4" ? "bg-primary hover:bg-primary/90" : ""}
            >
              Q4 (Oct-Dec)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Administrative Fund</CardTitle>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardDescription>For day-to-day operating expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Opening Balance</span>
                  <span className="font-medium">{formatCurrency(currentData.adminFund.opening)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Income</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    +{formatCurrency(currentData.adminFund.income)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expenses</span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    -{formatCurrency(currentData.adminFund.expenses)}
                  </span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Closing Balance</span>
                  <span className="font-bold text-lg">{formatCurrency(currentData.adminFund.closing)}</span>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Expenses</span>
                    <span>{adminExpensePercentage}% of available funds</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar" style={{ width: `${adminExpensePercentage}%` }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl">Capital Works Fund</CardTitle>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardDescription>For long-term capital improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Opening Balance</span>
                  <span className="font-medium">{formatCurrency(currentData.capitalWorksFund.opening)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Income</span>
                  <span className="font-medium text-green-600 dark:text-green-400">
                    +{formatCurrency(currentData.capitalWorksFund.income)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expenses</span>
                  <span className="font-medium text-red-600 dark:text-red-400">
                    -{formatCurrency(currentData.capitalWorksFund.expenses)}
                  </span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Closing Balance</span>
                  <span className="font-bold text-lg">{formatCurrency(currentData.capitalWorksFund.closing)}</span>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Expenses</span>
                    <span>{capitalExpensePercentage}% of available funds</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar" style={{ width: `${capitalExpensePercentage}%` }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Major Expenses</CardTitle>
              <CardDescription>
                Significant expenditures for {activeQuarter} {activeYear}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {currentData.majorExpenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{expense.item}</span>
                    <span className="font-medium">{formatCurrency(expense.amount)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Levy Information</CardTitle>
              <CardDescription>Current quarter levy details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Administrative Fund Levy</h4>
                  <p className="text-xl font-bold">{formatCurrency(currentData.levyDetails.adminLevy)}</p>
                  <p className="text-xs text-muted-foreground">Per lot per quarter</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Capital Works Fund Levy</h4>
                  <p className="text-xl font-bold">{formatCurrency(currentData.levyDetails.capitalWorksLevy)}</p>
                  <p className="text-xs text-muted-foreground">Per lot per quarter</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Total Quarterly Levy</h4>
                  <p className="text-xl font-bold">
                    {formatCurrency(currentData.levyDetails.adminLevy + currentData.levyDetails.capitalWorksLevy)}
                  </p>
                  <p className="text-xs text-muted-foreground">Per lot per quarter</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Due Date</h4>
                  <p className="font-medium">{formatDate(currentData.levyDetails.dueDate)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Financial Reports</CardTitle>
              <CardDescription>Download detailed financial reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Quarterly Financial Statement</span>
                  <Download className="ml-auto h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span>Income & Expense Report</span>
                  <Download className="ml-auto h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-start">
                  <PieChart className="mr-2 h-4 w-4" />
                  <span>Expense Breakdown</span>
                  <Download className="ml-auto h-4 w-4" />
                </Button>
                <Button variant="outline" className="justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Annual Budget</span>
                  <Download className="ml-auto h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="bg-accent">
          <Info className="h-4 w-4" />
          <AlertTitle>About Strata Finances</AlertTitle>
          <AlertDescription>
            <p className="mb-2">
              Under the NSW Strata Schemes Management Act (2015), strata schemes must maintain two separate funds:
            </p>
            <ul className="space-y-2 mb-2">
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <span>
                  <strong>Administrative Fund:</strong> For day-to-day recurrent expenses like cleaning, insurance, and
                  utilities.
                </span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="h-4 w-4 text-primary mr-2 mt-1" />
                <span>
                  <strong>Capital Works Fund:</strong> For major capital expenses like painting, structural repairs, and
                  infrastructure upgrades.
                </span>
              </li>
            </ul>
            <p>
              Levies are determined based on unit entitlements and are set annually at the Annual General Meeting. For
              questions about your specific levy amount, please contact the Treasurer.
            </p>
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
}

